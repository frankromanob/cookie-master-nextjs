import { Layout } from '@/components/layouts'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { GetServerSideProps } from 'next';
import Cookies from "js-cookie";
import axios from 'axios';


interface Props {
    theme: string
}

export default function ThemeChangerPage(props: Props) {


    const [currentTheme, setCurrentTheme] = useState(props.theme)

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value;
        setCurrentTheme(selectedTheme)
        Cookies.set('theme', selectedTheme)
    }

const onClick = async()=>{
    const {data}= await axios.get('/api/hello');
    console.log(data)

}

  


    return (
        <Layout title='Cambiar Tema'>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={currentTheme}
                            onChange={onThemeChange}
                        >
                            <FormControlLabel value='light' control={<Radio />} label='Light' />
                            <FormControlLabel value='dark' control={<Radio />} label='Dark' />
                            <FormControlLabel value='custom' control={<Radio />} label='Custom' />
                        </RadioGroup>
                    </FormControl>
                    <Button onClick={onClick}>
                        Cookies from API
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { theme = 'light', name = 'No name' } = req.cookies;

    const validThemes=['light','dark','custom']

    return {
        props: {
            theme: validThemes.includes(theme) ? theme : 'light',
            name
        }
    }
}


