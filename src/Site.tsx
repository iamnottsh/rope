import {Box, Container, Typography} from "@mui/material";
import React from "react";
import Rope from "./Rope";

function Site() {
    return (
        <Container component="main">
            <Typography variant="h1">
                同步滚动
            </Typography>
            <Rope maxHeight={150} width="100%" display="flex">
                <Box maxHeight="100%" width="50%" overflow="auto">
                    <Typography>
                        这是第1段内容<br/>
                        这是第1段内容<br/>
                        这是第1段内容<br/>
                        这是第1段内容<br/>
                        这是第1段内容<br/>
                        这是第1段内容<br/>
                    </Typography>
                    <Typography>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                    </Typography>
                    <Typography>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                    </Typography>
                </Box>
                <Box maxHeight="100%" width="50%" overflow="auto">
                    <Typography>
                        这是第1段内容<br/>
                        这是第1段内容<br/>
                        这是第1段内容<br/>
                    </Typography>
                    <Typography>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                        这是第2段内容<br/>
                    </Typography>
                    <Typography>
                        这是第3段内容<br/>
                        这是第3段内容<br/>
                    </Typography>
                </Box>
            </Rope>
        </Container>
    )
}

export default Site
