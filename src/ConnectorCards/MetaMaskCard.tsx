import { useEffect, useState } from "react";
import { Card } from "../Card";
import { hooks, metaMask } from "../Connectors/metaMask";
import { FC } from "react";
const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

const MetaMaskCard = () => {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);

  return (
    <>
      <Card
        connector={metaMask}
        chainId={chainId}
        isActivating={isActivating}
        isActive={isActive}
        error={error}
        setError={setError}
        accounts={accounts}
        provider={provider}
        ENSNames={ENSNames}
      />
    </>
  );
};

export default MetaMaskCard;
