import { Grid, Typography } from "@material-ui/core";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import { Button } from "app/components/Buttons";
import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import React, { FC, useState } from "react";

interface ScheduleShipmentsDrawerProps {
    submitButtonLabel: string;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleSubmit: (shippingSchedule: string, date: string | null, time: string | null) => void; 
}

const ScheduleShipmentsDrawer: FC<ScheduleShipmentsDrawerProps> = ({ setDrawerOpen, handleSubmit, submitButtonLabel }) => {

    const [shippingSchedule, setShippingSchedule] = useState<string>("1")
    const [date, setDate] = useState<string | null>("")
    const [time, setTime] = useState<string | null>("")

    const [dateOpen, setDateOpen] = useState(false)
    const [timeOpen, setTimeOpen] = useState(false)

    const shippingScheduleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShippingSchedule(e.target.value)
    }

    return (
        <Flex direction="column" style={{ height: '100%' }}>
            <Flex direction="column" style={{ gap: "20px" }}>
                <Typography>When are you going to ship this?</Typography>
                <Flex direction="row">
                    <RadioGroup
                        value={shippingSchedule}
                        options={[
                            { label: "Right Now", value: "1" },
                            { label: "Ship Later", value: "0" },
                        ]}
                        name={"cardType"}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => shippingScheduleHandler(e)}
                    />
                </Flex>
                <Grid item xs={11}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date"
                            value={date || null}
                            onChange={(val) => setDate(val)}
                            open={dateOpen}
                            onOpen={() => setDateOpen(true)}
                            onClose={() => setDateOpen(false)}
                            disablePast
                            renderInput={(params) => (
                                <TextField
                                    style={{ width: '100%' }}
                                    label="Date"
                                    placeholder={"e.g 06/06/2021"}
                                    {...params}
                                    onClick={() => setDateOpen(true)}
                                    defaultValue={""}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={11}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                        label="Time"
                        value={time || null}
                        onChange={(val) => setTime(val)}
                        open={timeOpen}
                        onOpen={() => setTimeOpen(true)}
                        onClose={() => setTimeOpen(false)}
                        renderInput={(params) => (
                            <TextField
                                style={{ width: '100%' }}
                                placeholder={"e.g 12:32"}
                                {...params}
                                onClick={(e) => setTimeOpen(true)}
                                defaultValue={""}
                            />
                        )}
                        />
                    </LocalizationProvider>
                </Grid>
            </Flex>
            <Flex direction="row" justifyContent={'space-between'} style={{ alignItems: 'flex-end' }} >
                <Button secondary style={{ width: 'fit-content', minWidth: '150px' }} onClick={() => setDrawerOpen(false)} label="Cancel"></Button>
                <Button style={{ width: 'fit-content', minWidth: '150px' }} label={submitButtonLabel} onClick={() => handleSubmit(shippingSchedule, date, time)}></Button>
            </Flex>
        </Flex>
    );
}

export default ScheduleShipmentsDrawer;
