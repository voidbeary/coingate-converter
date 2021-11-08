import Button from "@mui/material/Button";

function BuyButton({ rates, currencyName }) {
  //   const [currencyName, setcurrencyName] = useState("BTC");

  return (
    <Button variant="contained" color="primary" type="submit">
      Buy {currencyName}
    </Button>
  );
}
export { BuyButton };
