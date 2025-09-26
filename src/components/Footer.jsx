import React from "react";
import "./Footer.css"; // optional for styling

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#242424",
            color: "white",
            padding: "30px 20px",
            textAlign: "center"
        }}>
            <h3>Contact Us 📬</h3>
            <p>Email: petvora.support@example.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 123 Pet Street, Animal City, India</p>

            <div style={{ marginTop: "15px" }}>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ color: "white", margin: "0 10px" }}>Instagram</a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ color: "white", margin: "0 10px" }}>Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" style={{ color: "white", margin: "0 10px" }}>Twitter</a>
            </div>

            <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
                &copy; {new Date().getFullYear()} PetVora. All rights reserved.
            </p>
        </footer>
    );
}
