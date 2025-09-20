import React, { useEffect, useMemo, useState } from 'react'
import {
    HeatMapContainer,
    HeatMapItem,
    MonthWrapper,
    MonthLabel,
    YearWrapper,
    HeatMapWrapper,
    HeatMapHeader,
} from './HeatMap.styles'
import { fetchSubmissionsByYear } from '../../services/leetcodeProfile'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { username } from '../../contants/constants'


const OPACITY_LEVELS = [0, 0.2, 0.45, 0.65, 1]

const HeatMapMonth = React.memo(({ monthIdx, monthData, year, getOpacity }) => (
    <MonthWrapper>
        <MonthLabel>
            {new Date(year, monthIdx, 1).toLocaleDateString("en-US", { month: "short" })}
        </MonthLabel>
        <HeatMapContainer>
            {monthData.map((entry, idx) => (
                <HeatMapItem
                    key={idx}
                    data-opacity={getOpacity(entry.val)}
                    data-tooltip={`${entry.val} submissions on ${entry.date.toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}`}
                />
            ))}
        </HeatMapContainer>
    </MonthWrapper>
))

const HeatMap = () => {
    const [year, setYear] = useState(new Date().getFullYear())
    const [data, setData] = useState({})

    useEffect(() => {
        const fetch = async () => {
            const res = await fetchSubmissionsByYear(username, year)
            const calendar = JSON.parse(res.data.matchedUser?.userCalendar?.submissionCalendar || "{}")

            const submissionData = {
                submissionCalendar: calendar,
                totalSubmissions: Object.values(calendar).reduce((a, b) => a + b, 0),
                activeYears: res.data.matchedUser?.userCalendar?.activeYears?.reverse() || [],
            }

            setData((prev) =>
                JSON.stringify(prev) === JSON.stringify(submissionData) ? prev : submissionData
            )
        }

        fetch()
    }, [year])


    const heatData = useMemo(() => {
        const currentYear = new Date().getFullYear()
        const startOfYear = new Date(year, 0, 1).getTime()
        const endDate = year === currentYear ? new Date() : new Date(year + 1, 0, 1)

        const totalDays = Math.floor((endDate - new Date(year, 0, 1)) / (1000 * 60 * 60 * 24)) + 1
        const submissions = Array(totalDays).fill(0)

        Object.entries(data?.submissionCalendar || {}).forEach(([secTimestamp, val]) => {
            const msTimestamp = Number(secTimestamp) * 1000
            const index = Math.floor((msTimestamp - startOfYear) / (1000 * 60 * 60 * 24))
            if (index >= 0 && index < totalDays) {
                submissions[index] = val
            }
        })

        return submissions
    }, [year, data])

    const getOpacity = (val) => {
        if (val === 0) return 0
        if (val === 1) return OPACITY_LEVELS[1]
        if (val <= 3) return OPACITY_LEVELS[2]
        if (val <= 12) return OPACITY_LEVELS[3]
        return OPACITY_LEVELS[4]
    }

    const months = useMemo(() => {
        const currentYear = new Date().getFullYear()
        const today = new Date()
        const yearStart = new Date(year, 0, 1).getTime()

        return Array.from({ length: 12 }, (_, month) => {
            if (year === currentYear && month > today.getMonth()) return []

            let daysInMonth = new Date(year, month + 1, 0).getDate()
            if (year === currentYear && month === today.getMonth()) {
                daysInMonth = today.getDate()
            }

            return Array.from({ length: daysInMonth }, (_, day) => {
                const dayDate = new Date(year, month, day + 1)
                const index = Math.floor((dayDate.getTime() - yearStart) / (1000 * 60 * 60 * 24))

                return { val: heatData[index], date: dayDate }
            })
        }).filter((month) => month.length > 0)
    }, [year, heatData])


    const totalSubmissions = useMemo(() => {
        return data?.submissionCalendar ? Object.entries(data?.submissionCalendar).reduce((acc, [, submissions]) => acc + submissions, 0) : 0
    }, [heatData])

    return (
        <YearWrapper>
            <HeatMapHeader>
                <p><strong>{totalSubmissions}</strong> submissions in {year}</p>

                <FormControl size="small" style={{ minWidth: 100 }}>
                    <InputLabel id="year-select-label" style={{ color: 'white' }}>Year</InputLabel>
                    <Select
                        labelId="year-select-label"
                        value={year}
                        label="Year"
                        onChange={(e) => setYear(e.target.value)}
                    >
                        {data?.activeYears?.map((yr) => (
                            <MenuItem key={yr} value={yr}>
                                {yr}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </HeatMapHeader>

            <HeatMapWrapper>
                {months.map((monthData, monthIdx) => (
                    <HeatMapMonth
                        key={monthIdx}
                        monthIdx={monthIdx}
                        monthData={monthData}
                        year={year}
                        getOpacity={getOpacity}
                    />
                ))}
            </HeatMapWrapper>
        </YearWrapper>
    )
}

export default HeatMap
