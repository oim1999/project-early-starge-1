import LoginForm from "./components/LoginForm";
import img1 from './assets/img1.jpg';

function App() {
  return (
    <div className="flex flex-col flex-auto w-full h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="bg-green-200 bg-cover" style={{backgroundImage: `url(${img1})`}}></div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450] px-8">
              <div className="mb-8">
                <h1 className="texttest-3xl font-medium">Welcome Back</h1>
                <p>Please enter your info</p>
              </div>
              <LoginForm />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
