import { useNavigate } from 'react-router-dom';

const NavigateBackButton = () => {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button">
      Go Back
    </button>
  );
};

export default NavigateBackButton;
