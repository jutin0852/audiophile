import * as React from "react";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Totals {
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

interface Shipping {
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

interface Customer {
  name: string;
}

interface OrderData {
  customer: Customer;
  orderId: string;
  timestamp: number;
  items: OrderItem[];
  totals: Totals;
  shipping: Shipping;
  paymentMethod: string;
}

interface EmailTemplateProps {
  orderData: OrderData;
}

export function EmailTemplate({ orderData }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        color: "#333",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
        <div
          style={{
            background: "#D87D4A",
            color: "white",
            padding: 30,
            textAlign: "center",
          }}
        >
          <h1>audiophile</h1>
          <h2>Thank You For Your Order!</h2>
        </div>

        <div style={{ background: "#f9f9f9", padding: 30 }}>
          <p>Hi {orderData.customer.name},</p>

          <p>
            Your order has been confirmed! We are getting your items ready for
            shipment.
          </p>

          <div
            style={{
              background: "white",
              border: "1px solid #ddd",
              padding: 20,
              margin: "20px 0",
            }}
          >
            <h3>Order #{orderData.orderId}</h3>
            <p>
              <strong>Order Date:</strong>{" "}
              {new Date(orderData.timestamp).toLocaleDateString()}
            </p>

            <h4>Items:</h4>
            {orderData.items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  <small>Quantity: {item.quantity}</small>
                </div>
                <div>${(item.price * item.quantity).toLocaleString()}</div>
              </div>
            ))}

            <div
              style={{
                marginTop: 20,
                paddingTop: 20,
                borderTop: "2px solid #333",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px 0",
                }}
              >
                <span>Subtotal:</span>
                <span>${orderData.totals.subtotal.toLocaleString()}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px 0",
                }}
              >
                <span>Shipping:</span>
                <span>${orderData.totals.shipping}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px 0",
                }}
              >
                <span>VAT (included):</span>
                <span>${orderData.totals.vat.toLocaleString()}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <span
                  style={{ fontSize: 20, fontWeight: "bold", color: "#D87D4A" }}
                >
                  Grand Total:
                </span>
                <span
                  style={{ fontSize: 20, fontWeight: "bold", color: "#D87D4A" }}
                >
                  ${orderData.totals.grandTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <h4>Shipping Address:</h4>
          <p>
            {orderData.shipping.address}
            <br />
            {orderData.shipping.city}, {orderData.shipping.zipCode}
            <br />
            {orderData.shipping.country}
          </p>

          <h4>Payment Method:</h4>
          <p>{orderData.paymentMethod}</p>

          <center>
            <a
              href={`https://your-domain.com/orders/${orderData.orderId}`}
              style={{
                display: "inline-block",
                background: "#D87D4A",
                color: "white",
                padding: "15px 30px",
                textDecoration: "none",
                margin: "20px 0",
              }}
            >
              View Your Order
            </a>
          </center>

          <p
            style={{
              marginTop: 30,
              paddingTop: 20,
              borderTop: "1px solid #ddd",
              fontSize: 14,
              color: "#666",
            }}
          >
            Questions about your order? Contact us at support@audiophile.com
            <br />
            <strong>audiophile</strong> | Premium Audio Equipment
          </p>
        </div>
      </div>
    </div>
  );
}
