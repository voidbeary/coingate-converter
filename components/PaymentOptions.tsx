import type { FC } from "react";
const paymentMethods = [
  "SEPA Bank transfer",
  "Credit and debit card",
  "Apple pay",
];

const PaymentOptions: FC = () => {
  return (
    <>
      {paymentMethods.map((payment) => {
        return (
          <option
            key={payment}
            value={payment}
            style={{
              fontSize: "1rem",
              padding: "2px 4px",
              display: "flex",
              flexDirection: "row",
              borderRadius: "20px",
            }}
          >
            {payment}
          </option>
        );
      })}
    </>
  );
};
export { PaymentOptions };
