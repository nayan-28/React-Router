import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Oooooppppppssss!!!!!!!!!!!!</h2>
      <h4>{error.statusText || error.message}</h4>
      {error.status === 404 && (
        <div>
          <h4>Page Not Found</h4>
          <p>Go Back where you from</p>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
