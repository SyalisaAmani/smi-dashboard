function LoginPage({
    username,
    setUsername,
    password,
    setPassword,
    errorMessage,
    checkLogin,
  }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3B101B] via-[#702333] to-[#A34352] p-6">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-black mb-4">SMI Dashboard</h1>
            <p className="text-black-300 mb-6">Silakan login untuk melanjutkan</p>

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
      </div>
    );
  }

  export default LoginPage;