import { createContext } from "react";
import { useContract } from "web3-hooks";
import { tontonAddress, tontonAbi } from "../contracts/tonton";
import { faucetAddress, faucetAbi } from "../contracts/faucet";

export const ContractsContext = createContext(null);

const ContractsContextProvider = ({ children }) => {
  const tonton = useContract(tontonAddress, tontonAbi);
  const faucet = useContract(faucetAddress, faucetAbi);

  return (
    <ContractsContext.Provider value={[tonton, faucet]}>
      {children}
    </ContractsContext.Provider>
  );
};

export default ContractsContextProvider;