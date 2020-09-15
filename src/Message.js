import React from 'react'

function Message(props) {
    return (
        <div> 
            <h2>{props.username}:{props.text}</h2>
        <Card>
            <CardContent>
                <Typography
                color="white"
                variant="h5"
                component="h2"
                >
                    {props.text}
                </Typography>
            </CardContent>
        </Card>
        </div>
        
    )
}

export default Message
