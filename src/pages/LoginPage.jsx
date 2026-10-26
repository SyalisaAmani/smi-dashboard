function LoginPage({
    username,
    setUsername,
    password,
    setPassword,
    errorMessage,
    checkLogin,
  }) {
    return (
      <div className="login-page">
        <h1>SMI Dashboard</h1>
        <h2>Login</h2>
        <p>Silakan login untuk melanjutkan</p>

        <form
            onSubmit={(e) => {
              e.preventDefault();
              checkLogin();
            }}
          >
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit">Login</button>
          </form>
      </div>
    );
  }

  export default LoginPage;