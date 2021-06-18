import { useContext, useState } from 'react'
import { Web3Context } from 'web3-hooks'

function Dapp() {
    const [tonton, tontonState] = useTonton()
    const [web3State] = useContext(Web3Context)
    import { Box, Container } from "@chakra-ui/react"
    import Faucet from "./Faucet"

    return (
        <>
        <Box minH="100vh" bgGradient="linear(to-b, #FFFFFF, ##FFD700)">
        <Container minW="90%">
          <Faucet />
        </Container>
      </Box>
        </>
    )
}

export default Dapp;