import { Link } from "@mui/material"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Link as RouterLink } from "react-router-dom"

export default function PortalLogo(colorObj: { color: string }): JSX.Element {
    const { color } = colorObj

    return (
        <Grid container>
            <Link
                component={RouterLink}
                to="/"
                underline="none"
                sx={{
                    height: "max-content",
                    width: "max-content",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                }}
            >
                <Grid
                    item
                    style={{
                        height: "40px",
                        width: "31px",
                        userSelect: "none",
                        alignContent: "center",
                    }}
                >
                    <svg
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 216 274.63"
                    >
                        <title>Capstone Projects Portal Logo</title>
                        <g id="Layer_2" data-name="Layer 2" fill={color}>
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path d="M144,32.53l-2.25-.91a47.82,47.82,0,0,0-17.52-3.1A48.41,48.41,0,0,0,108,31.17a48.41,48.41,0,0,0-16.18-2.65,47.82,47.82,0,0,0-17.52,3.1l-2.25.91v5H66.42v39h83.16v-39H144ZM104.4,67.37a53.5,53.5,0,0,0-25.16,0V37.5a46.35,46.35,0,0,1,25.16,0Zm32.36,0a53.5,53.5,0,0,0-25.16,0V37.5a46.35,46.35,0,0,1,25.16,0Z" />
                                <path d="M206.2,21l-3-1.44C175.84,6.21,145.59,0,108,0S40.17,6.21,12.78,19.54L9.82,21,0,25.75V138.46c0,18.85,4,66.15,41.09,98.22,28.09,24.26,56.44,34.37,59.58,35.45,0,0,6.83,2.5,7.34,2.5s7.35-2.5,7.35-2.5c3.14-1.07,31.45-11.18,59.56-35.44C212,204.61,216,157.31,216,138.46V25.77ZM77.8,235.07l-4.13,4.13c-3.4-2.17-6.94-4.58-10.54-7.23L74,221.15,77.8,225Zm0-28-6.38,6.39-8.89,8.88-8.88-8.88L47.26,207V197l3.85-3.85,11.42,11.42L74,193.11,77.8,197Zm0-28L62.53,194.27,47.26,179V168.93l3.85-3.85,11.42,11.43L74,165.08l3.84,3.85Zm45.47,56.07-6.39,6.38L108,250.34l-8.88-8.89-6.39-6.38V225l3.85-3.84L108,232.57l11.42-11.42,3.85,3.84Zm0-28-6.39,6.39L108,222.3l-8.88-8.88L92.73,207V197l3.85-3.85L108,204.53l11.42-11.42,3.85,3.85Zm0-28L108,194.27,92.73,179V168.93l3.85-3.85L108,176.51l11.42-11.43,3.85,3.85Zm14.93,56.07V225l3.84-3.84L152.87,232c-3.6,2.65-7.13,5.05-10.54,7.22Zm30.54-28-6.39,6.39-8.88,8.88-8.89-8.88L138.2,207V197l3.84-3.85,11.43,11.42,11.42-11.42,3.85,3.85Zm0-28-15.27,15.27L138.2,179V168.93l3.84-3.85,11.43,11.43,11.42-11.43,3.85,3.85Zm28.77-24a39.66,39.66,0,0,1-14.66-4.76,24.44,24.44,0,0,0-24.24,0,39.31,39.31,0,0,1-38.49,0,24.44,24.44,0,0,0-24.24,0,39.31,39.31,0,0,1-38.49,0,24.44,24.44,0,0,0-24.24,0A39.66,39.66,0,0,1,18.49,155a135.58,135.58,0,0,1-1-14.61,25.21,25.21,0,0,0,8.56-3,39.33,39.33,0,0,1,38.5,0,24.42,24.42,0,0,0,24.23,0,39.33,39.33,0,0,1,38.5,0,24.42,24.42,0,0,0,24.23,0,39.33,39.33,0,0,1,38.5,0,25,25,0,0,0,8.56,2.94A135.57,135.57,0,0,1,197.51,155Zm1.05-29.11L171.27,98.07,145.56,124,108,85.38,70.44,124,44.73,98.07,17.44,125.9V36.67l3-1.44C45.34,23.09,73.17,17.44,108,17.44s62.66,5.65,87.58,17.79l3,1.44Z" />
                            </g>
                        </g>
                    </svg>
                </Grid>
                <Grid item ml={0.6}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="start"
                        alignItems="start"
                        height="min-content"
                    >
                        <Grid
                            item
                            style={{
                                userSelect: "none",
                                width: "100%",
                                height: "max-content",
                            }}
                        >
                            <Typography
                                color={colorObj}
                                fontFamily="Din Bold"
                                fontSize="1.15em"
                                lineHeight="normal"
                            >
                                CAPSTONE
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            style={{
                                marginTop: "-4px",
                                userSelect: "none",
                                width: "100%",
                                height: "max-content",
                            }}
                        >
                            <Typography
                                color={colorObj}
                                fontFamily="Din Regular"
                                fontSize="1.17em"
                                lineHeight="normal"
                            >
                                PROJECTS PORTAL
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Link>
        </Grid>
    )
}
