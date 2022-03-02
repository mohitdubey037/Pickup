import { Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import { Button } from 'app/components/Buttons'
import { GridContainer } from 'app/components/GridSpacing/GridSpacing'
import { Input } from 'app/components/Input'
import { H3 } from 'app/components/Typography/Typography'
import ContactDetails from './ContactDetails'
import { ContactFlex, ContactForm } from './style'

export default function HelpContact() {
    return (
        <Box mt={4}>

            <ContactFlex>
                <ContactForm>
            <Box mb={4}>
            <H3 text="Contact Us" />
            </Box>
                    <Grid container>
                    <Grid item xs={12} md={11}>
                    <GridContainer container spacing={2}>
                        <Grid item xs={12} lg={6} md={6} sm={6} xl={6}>
                            <Input label="First Name" placeholder="John" />
                        </Grid>
                        <Grid item xs={12} lg={6} md={6} sm={6} xl={6}>
                            <Input label="Last Name" placeholder="Doe" />
                        </Grid>
                        <Grid item xs={12} lg={6} md={6} sm={6} xl={6}>
                            <Input label="Phone Number" placeholder="+1 (999)-999-9999" />
                        </Grid>
                        <Grid item xs={12} lg={6} md={6} sm={6} xl={6}>
                            <Input label="Email Address" placeholder="johndoe@gmail.com" />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Input
                            id="message"
                            name="message"
                            label={"Message"}
                            placeholder={"Add your message here"}
                            type={"textarea"}
                        />
                        </Grid>
                        </GridContainer>
                    </Grid>
                    </Grid>
                    </ContactForm>
                    <ContactDetails />
                </ContactFlex>
                <Button size="medium" label='Send Message'/>
                </Box>
    )
}
