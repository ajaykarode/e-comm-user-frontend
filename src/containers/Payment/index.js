import React from "react";
import Layout from "../../components/Layout";
import "./design.css";

import { Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../Footer";
const Payment = () => {
  return (
    <Layout>
      <Container
        style={{
          background: "white",
          marginTop: "10px",
        }}
      >
        <div>
          <div>
            <div style={{ marginLeft: "20px", marginRight: "20px" }}>
              <div>
                <h5 style={{ color: "white" }}>ajay</h5>
                <h5>Payments</h5>
              </div>
              <h5>How do I pay for a AgriComm purchase?</h5>
              <p>
                AgriComm offers you multiple payment methods. Whatever your
                online mode of payment, you can rest assured that AgriComm's
                trusted payment gateway partners use secure encryption
                technology to keep your transaction details confidential at all
                times. 
                You may use Internet Banking, Gift Card, Cash on Delivery
                and Wallet to make your purchase. AgriComm also accepts payments
                made using Visa, MasterCard, Maestro and American Express
                credit/debit cards in India and 21 other countries.
              </p>

              <h5>
                Are there any hidden charges (Octroi or Sales Tax) when I make a
                purchase on AgriComm?
              </h5>
              <p>
                There are NO hidden charges when you make a purchase on
                AgriComm. The prices listed for all the items are final and
                all-inclusive. The price you see on the product page is exactly
                what you pay. Delivery charges may be extra depending on the
                seller policy. Please check individual seller for the same. In
                case of seller WS Retail, the ₹50 delivery charge is waived off
                on orders worth ₹500 and over
              </p>
              <h5>What is Cash on Delivery?</h5>
              <p>
                If you are not comfortable making an online payment on
                AgriComm.com, you can opt for the Cash on Delivery (C-o-D)
                payment method instead. With C-o-D you can pay in cash at the
                time of actual delivery of the product at your doorstep, without
                requiring you to make any advance payment online. The maximum
                order value for a Cash on Delivery (C-o-D) payment is ₹50,000.
                It is strictly a cash-only payment method. Gift Cards or store
                credit cannot be used for C-o-D orders. Foreign currency cannot
                be used to make a C-o-D payment. Only Indian Rupees accepted.
              </p>

              <h5>How do I pay using a credit/debit card?</h5>
              <p>
                We accept payments made by credit/debit cards issued in India
                and 21 other countries.
                <h6>Credit cards</h6>
                <p>
                  We accept payments made using Visa, MasterCard and American
                  Express credit cards. To pay using your credit card at
                  checkout, you will need your card number, expiry date,
                  three-digit CVV number (found on the backside of your card).
                  After entering these details, you will be redirected to the
                  bank's page for entering the online 3D Secure password.
                </p>
                <h6>Debit cards</h6>
                <p>
                  We accept payments made using Visa, MasterCard and Maestro
                  debit cards. To pay using your debit card at checkout, you
                  will need your card number, expiry date (optional for Maestro
                  cards), three-digit CVV number (optional for Maestro cards).
                  You will then be redirected to your bank's secure page for
                  entering your online password (issued by your bank) to
                  complete the payment. Internationally issued credit/debit
                  cards cannot be used for Flyte, Wallet and eGV
                  payments/top-ups.
                </p>
              </p>
              <h5>Is it safe to use my credit/debit card on AgriComm?</h5>
              <p>
                Your online transaction on AgriComm is secure with the highest
                levels of transaction security currently available on the
                Internet. AgriComm uses 256-bit encryption technology to protect
                your card information while securely transmitting it to the
                respective banks for payment processing. All credit card and
                debit card payments on AgriComm are processed through secure and
                trusted payment gateways managed by leading banks. Banks now use
                the 3D Secure password service for online transactions,
                providing an additional layer of security through identity
                verification.
              </p>
              <h5>What steps does AgriComm take to prevent card fraud?</h5>
              <p>
                AgriComm realizes the importance of a strong fraud detection and
                resolution capability. We and our online payments partners
                monitor transactions continuously for suspicious activity and
                flag potentially fraudulent transactions for manual verification
                by our team. In the rarest of rare cases, when our team is
                unable to rule out the possibility of fraud categorically, the
                transaction is kept on hold, and the customer is requested to
                provide identity documents. The ID documents help us ensure that
                the purchases were indeed made by a genuine card holder. We
                apologise for any inconvenience that may be caused to customers
                and request them to bear with us in the larger interest of
                ensuring a safe and secure environment for online transactions.
              </p>

              <h5>What is a 3D Secure password?</h5>
              <p>
                The 3D Secure password is implemented by VISA and MasterCard in
                partnership with card issuing banks under the "Verified by VISA"
                and "Mastercard SecureCode" services, respectively. The 3D
                Secure password adds an additional layer of security through
                identity verification for your online credit/debit card
                transactions. This password, which is created by you, is known
                only to you. This ensures that only you can use your card for
                online purchases.
              </p>
              <h5>
                How can I get the 3D Secure password for my credit/debit card?
              </h5>
              <p>
                You can register for the 3D Secure password for your
                credit/debit card by visiting your bank's website. The
                registration links for some of the banks have been provided
                below for easy reference:
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>State Bank of India</td>
                      <td>ICICI Bank</td>
                      <td>HDFC Bank</td>
                      <td>Punjab National Bank</td>
                    </tr>
                    <tr>
                      <td>Axis Bank</td>
                      <td>Corporation Bank</td>
                      <td>Andhra Bank</td>
                      <td>Bank of Baroda</td>
                    </tr>
                    <tr>
                      <td>Standard Chartered India</td>
                      <td>Union Bank of India</td>
                      <td>Central Bank of India</td>
                      <td>Citibank</td>
                    </tr>
                    <tr>
                      <td>Deutsche Bank</td>
                      <td>Dhanlakshmi Bank</td>
                      <td>IDBI Bank</td>
                      <td>Canara Bank</td>
                    </tr>
                    <tr>
                      <td>IndusInd Bank</td>
                      <td>Federal Bank</td>
                      <td>Kotak Mahindra Bank</td>
                      <td>Karur Vysya Bank</td>
                    </tr>
                    <tr>
                      <td>Oriental Bank of Commerce</td>
                      <td>South Indian Bank</td>
                      <td>Vijaya Bank</td>
                      <td>Vijaya Bank</td>
                    </tr>
                  </tbody>
                </Table>
              </p>

              <h5>
                Can I use my bank's Internet Banking feature to make a payment?
              </h5>
              <p>
                Yes. AgriComm offers you the convenience of using your bank's
                Internet Banking service to make a payment towards your order.
                With this you can directly transfer funds from your bank
                account, while conducting a highly secure transaction.
              </p>
              <p>
                We accept payment through Internet Banking for the following
                banks:
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>State Bank of India</td>
                      <td>ICICI Bank</td>
                      <td>HDFC Bank</td>
                      <td>Punjab National Bank</td>
                    </tr>
                    <tr>
                      <td>Axis Bank</td>
                      <td>Corporation Bank</td>
                      <td>Andhra Bank</td>
                      <td>Bank of Baroda</td>
                    </tr>
                    <tr>
                      <td>Standard Chartered India</td>
                      <td>Union Bank of India</td>
                      <td>Central Bank of India</td>
                      <td>Citibank</td>
                    </tr>
                    <tr>
                      <td>Deutsche Bank</td>
                      <td>Dhanlakshmi Bank</td>
                      <td>IDBI Bank</td>
                      <td>Canara Bank</td>
                    </tr>
                    <tr>
                      <td>IndusInd Bank</td>
                      <td>Federal Bank</td>
                      <td>Kotak Mahindra Bank</td>
                      <td>Karur Vysya Bank</td>
                    </tr>
                    <tr>
                      <td>Oriental Bank of Commerce</td>
                      <td>South Indian Bank</td>
                      <td>Vijaya Bank</td>
                      <td>Vijaya Bank</td>
                    </tr>
                  </tbody>
                </Table>
              </p>

              <h5>
                Can I make a credit/debit card or Internet Banking payment on
                AgriComm through my mobile?
              </h5>
              <p>
                Yes, you can make credit card payments through the AgriComm
                mobile site and application. AgriComm uses 256-bit encryption
                technology to protect your card information while securely
                transmitting it to the secure and trusted payment gateways
                managed by leading banks.
              </p>

              <h5>How does 'Instant Cashback' work?</h5>
              <p>
                The 'Cashback' offer is instant and exclusive to AgriComm.com.
                You only pay the final price you see in your shopping cart.
              </p>
              <h5>How do I place a Cash on Delivery (C-o-D) order?</h5>
              <p>
                All items that have the "Cash on Delivery Available" icon are
                valid for order by Cash on Delivery.
              </p>
              <p>
                Add the item(s) to your cart and proceed to checkout. When
                prompted to choose a payment option, select "Pay By Cash on
                Delivery". Enter the CAPTCHA text as shown, for validation.
              </p>
              <p>
                Once verified and confirmed, your order will be processed for
                shipment in the time specified, from the date of confirmation.
                You will be required to make a cash-only payment to our courier
                partner at the time of delivery of your order to complete the
                payment.
              </p>
              <p>Terms & Conditions:</p>
              <ul>
                <li>The maximum order value for C-o-D is ₹50,000</li>
                <li>
                  Gift Cards or Store Credit cannot be used for C-o-D orders
                </li>
                <li>Cash-only payment at the time of delivery.</li>
              </ul>

              <h5>What is AgriComm's credit card EMI option?</h5>
              <p>
                With AgriComm's credit card EMI option, you can choose to pay in
                easy installments of 3, 6, 9, 12, 18*, or 24 months* with credit
                cards from the following banks:
              </p>
              <ul>
                <li>HDFC</li>
                <li>Citi</li>
                <li>ICICI</li>
                <li>Kotak</li>
                <li>Axis</li>
                <li>IndusInd</li>
                <li>SBI</li>
                <li>Standard Chartered</li>
                <li>HSBC</li>
              </ul>

              <p>
                *18 & 24 months EMI options are available from select banks
                only. Please refer to the table below for more details:
              </p>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Banks</th>
                    <th>Supports 18 & 24 months tenure </th>
                    <th>
                      Minimum order value to avail 18 & 24 months EMI options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HDFC</td>
                    <td>Yes</td>
                    <td>₹ 10,000</td>
                  </tr>
                  <tr>
                    <td>Citi</td>
                    <td>Yes</td>
                    <td>₹ 10,000</td>
                  </tr>
                  <tr>
                    <td>ICICI</td>
                    <td>Yes</td>
                    <td>₹ 10,000</td>
                  </tr>
                  <tr>
                    <td>Kotak</td>
                    <td>Yes</td>
                    <td>₹ 4,000</td>
                  </tr>
                  <tr>
                    <td>Axis</td>
                    <td>Yes</td>
                    <td>₹ 4,000</td>
                  </tr>
                  <tr>
                    <td>IndusInd</td>
                    <td>Yes</td>
                    <td>₹ 4,000</td>
                  </tr>
                  <tr>
                    <td>SBI</td>
                    <td>No</td>
                    <td>NA</td>
                  </tr>
                  <tr>
                    <td>Standard Chartered</td>
                    <td>Yes</td>
                    <td>₹ 4,000</td>
                  </tr>
                  <tr>
                    <td>HSBC</td>
                    <td>No</td>
                    <td>NA</td>
                  </tr>
                </tbody>
              </Table>
              <p>
                There is NO processing fee charged for availing AgriComm's EMI
                payment option. On return or exchange, interest charged by the
                bank till that time will not be refunded by AgriComm.
              </p>
              <p>
                You may check with the respective bank/issuer on how a
                cancellation, refund or pre-closure could affect the EMI terms,
                and what interest charges would be levied on you for the same.
              </p>
              <h5>Example and Calculations</h5>
              <p>
                The table below shows a representative rendering of EMI plans
                for a Rs 20,000 purchase on AgriComm paid using the EMI payment
                plan
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Tenure (months)</th>
                      <th>Loan amount </th>
                      <th>Monthly installment</th>
                      <th>Bank interest rate</th>
                      <th>Total effective price you pay</th>
                      <th> Interest paid to Bank</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3</td>
                      <td>Rs 20,000</td>
                      <td>Rs 6,800.44</td>
                      <td>12.00%</td>
                      <td>Rs. 20,401.33</td>
                      <td>Rs. 401.33</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Rs 20,000</td>
                      <td>Rs 3,450.97</td>
                      <td>12.00%</td>
                      <td> Rs 20,705.80</td>
                      <td>Rs. 705.80</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td> Rs 20,000</td>
                      <td>Rs 2,344.32</td>
                      <td>13.00%</td>
                      <td>Rs 21,098.89</td>
                      <td>Rs. 1,098.89</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Rs 20,000</td>
                      <td>Rs 1,786.35</td>
                      <td>13.00%</td>
                      <td>Rs 21,436.15</td>
                      <td>Rs. 1,436.15</td>
                    </tr>
                  </tbody>
                </Table>
              </p>
              <h5>
                How do I make a payment using AgriComm's credit card EMI option?
              </h5>
              <p>
                Once you've added the desired items to your AgriComm shopping
                cart, proceed with your order as usual by entering your address.
                When you're prompted to choose a payment mode for your order,
                select 'EMI' & follow these simple steps:
                <ul>
                  <li>
                    Choose your credit-card issuing bank you wish to pay from
                  </li>
                  <li>Select the EMI plan of your preference</li>
                  <li>Enter your credit card details</li>
                  <li>Click 'Save and Pay'</li>
                </ul>
              </p>
              <p>
                Please note that the full amount will be charged on your card
                the day of the transaction.
              </p>
            </div>
          </div>
        </div>
      
      </Container>

      {/* <Container> */}
      <Footer/>
      {/* </Container> */}


    </Layout>

    
  );
};

export default Payment;
