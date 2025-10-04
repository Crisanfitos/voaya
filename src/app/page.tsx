export default function MaintenancePage() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f3f4f6',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#111827' }}>
        Bienvenido a Voaya
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>
        Estamos construyendo algo increíble. Vuelve pronto.
      </p>
    </main>
  );
}