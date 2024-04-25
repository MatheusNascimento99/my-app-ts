import { Login } from "./login";

/* const mockSetIsLoggedIn = jest.fn(); //usado no desenvolver
const mockNavigate = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom") as any,
    useNavigate: () => mockNavigate
  
})) */



describe("login", () => {
  const mockALert = jest.fn();
  window.alert = mockALert;

  const mockEmail = "teste@teste.com";

  it("Deve exibir um alert com boas vindas, caso o email seja válido", async () => {
    const response = await Login(mockEmail);
    expect(response).toBeTruthy();
  });
  
/* 
  it("não deve exibir boas vindas sem o email", async () => {
    await Login(mockEmail);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    expect(mockALert).not.toHaveBeenCalledWith("Bem vindo!");
  }); */

  it("deve exibir um erro caso o email seja inválido", async () => {
    const response =  await Login("abx@teste.com");
    expect(response).toBeFalsy();
  });
});
