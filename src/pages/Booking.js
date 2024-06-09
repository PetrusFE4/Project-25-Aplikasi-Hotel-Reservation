import React, { useState } from 'react';

const styles = {
    app: {
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    form: {
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '16px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    }
};

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkInDate: '',
        checkOutDate: '',
        guests: 1,
    });

    const [buttonHover, setButtonHover] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Fungsi untuk memeriksa apakah email sudah terdaftar
    const checkEmailRegistered = (email) => {
        // Contoh implementasi sederhana dengan daftar email yang terdaftar
        const registeredEmails = ['kamu@gmail.com', 'user2@example.com', 'user3@example.com'];
        return registeredEmails.includes(email);
    };

    const validateBookingData = (data) => {
        const { name, email, checkInDate, checkOutDate, guests } = data;

        if (!name) {
            return { valid: false, message: "Nama tidak boleh kosong." };
        }
        if (!email) {
            return { valid: false, message: "Email tidak boleh kosong." };
        }
        if (!checkEmailRegistered(email)) {
            return { valid: false, message: "Email belum terdaftar." };
        }
        if (!checkInDate || !checkOutDate) {
            return { valid: false, message: "Tanggal check-in dan check-out harus diisi." };
        }
        if (new Date(checkInDate) >= new Date(checkOutDate)) {
            return { valid: false, message: "Tanggal check-out harus setelah tanggal check-in." };
        }
        if (guests <= 0) {
            return { valid: false, message: "Jumlah tamu harus lebih dari 0." };
        }

        return { valid: true, message: "" };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validation = validateBookingData(formData);

        if (!validation.valid) {
            alert(validation.message);
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/bookingId", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Terjadi .');
            }

            const result = await response.json();
            alert('Pemesanan berhasil! ID Pemesanan Anda: ' + result.bookingId);
        } catch (error) {
            alert('Gagal memesan hotel: ' + error.message);
        }
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label} htmlFor="name">Nama</label>
            <input
                style={styles.input}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label style={styles.label} htmlFor="email">Email</label>
            <input
                style={styles.input}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label style={styles.label} htmlFor="checkInDate">Tanggal Check-in</label>
            <input
                style={styles.input}
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                required
            />

            <label style={styles.label} htmlFor="checkOutDate">Tanggal Check-out</label>
            <input
                style={styles.input}
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                required
            />

            <label style={styles.label} htmlFor="guests">Jumlah Tamu</label>
            <input
                style={styles.input}
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
            />

            <button
                type="submit"
                style={buttonHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
            >
                Pesan Sekarang
            </button>
        </form>
    );
}

export default BookingForm;
