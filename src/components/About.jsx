import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link

export default function About() {
    return (
        <div style={{ fontFamily: "sans-serif", color: "#fff", backgroundColor: "#242424" }}>

            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1400&q=80")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <div style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    padding: "20px 40px",
                    borderRadius: "10px",
                    textAlign: "center",
                    color: "white"
                }}>
                    <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
                        Our Mission: Saving Lives, One Pet at a Time
                    </h1>
                    <p style={{ fontSize: "1.5rem" }}>
                        Every pet deserves a loving home. Join us in giving them a second chance.
                    </p>
                </div>
            </div>

            {/* About Section */}
            <section style={{ padding: "50px 20px", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Who We Are</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                    PetVora is a platform dedicated to rescuing animals and connecting them with loving families.
                    We believe every pet deserves a second chance at life. From dogs and cats to birds and rabbits,
                    our mission is to make adoption easy, safe, and joyful.
                </p>
            </section>

            {/* Stats */}
            <section style={{ display: "flex", justifyContent: "center", gap: "50px", padding: "40px 20px", flexWrap: "wrap" }}>
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff6f61" }}>500+</h3>
                    <p>Pets Adopted</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff6f61" }}>120+</h3>
                    <p>Active Volunteers</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff6f61" }}>50+</h3>
                    <p>Shelters Partnered</p>
                </div>
            </section>

            {/* Call-to-Action */}
            <section style={{ textAlign: "center", padding: "40px 20px" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Join Us Today!</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
                    Become a volunteer, donate, or adopt a pet — every action counts.
                </p>

                {/* ✅ Use React Router Link */}
                <Link
                    to="/"  // change this if your home route is different ("/home")
                    style={{
                        display: "inline-block",
                        padding: "12px 30px",
                        borderRadius: "8px",
                        backgroundColor: "#ff6f61",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        textDecoration: "none",
                        transition: "background 0.3s",
                    }}
                >
                    Explore Pets
                </Link>
            </section>
        </div>
    );
}

