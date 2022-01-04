import { Grid, TextField } from '@material-ui/core'
import { ContactSvg, email, phone } from 'app/assets/Icons'
import { Button } from '../Buttons'
import { Input } from '../Input'
import { ContactDetails, ContactHeading, StyledUl } from './style'

export default function HelpContact() {
    return (
        <div style={{padding:'1rem', textAlign:'left', width:'100%'}}>
            <ContactHeading>
                Contact Us
            </ContactHeading>
            <Grid container alignItems='center' spacing={3}>
                <Grid item lg={8}>
                    <Grid container spacing={3}>
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
                            <Input label="Email Address" placeholder="johndoe@pickups.com" />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <div style={{marginBottom:'0.5rem'}}>
                                Message
                            </div>
                            <TextField
                                placeholder='Add your message here'
                                style={{width:'100%'}}
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <ContactDetails style={{width:310}}>
                        <div>
                            <h4 style={{marginTop:0}}>Contact Information</h4>
                        </div>
                        <div>
                            <img src={ContactSvg}/>
                        </div>
                        <Grid container justifyContent='center'>
                            <Grid item xs={3} style={{textAlign:'right'}}>
                                <img style={{marginRight:'0.5rem'}} src={phone}/>
                            </Grid>
                            <Grid item xs={9}>
                                <StyledUl>
                                    <li style={{listStyle:'none'}}>Phone Number:</li>
                                    <li style={{listStyle:'none'}}><strong>416-123-4567</strong></li>
                                </StyledUl>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='center' style={{marginTop:'1rem'}}>
                            <Grid item xs={3} style={{textAlign:'right'}}>
                                 <img style={{marginRight:'0.5rem'}} src={email}/>
                            </Grid>
                            <Grid item xs={9}>
                                <StyledUl>
                                    <li style={{listStyle:'none'}}>Email Address:</li>
                                    <li style={{listStyle:'none'}}><strong>help@pickups.com</strong></li>
                                </StyledUl>
                            </Grid>
                        </Grid>
                    </ContactDetails>
                </Grid>
            </Grid>
            <div style={{maxWidth:'20%', marginTop:'1rem'}}>
                <Button size='small' label='Send Message'/>
            </div>
        </div>
    )
}
