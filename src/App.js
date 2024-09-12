import './App.css';
import ProcessAWSCredentials from './ProcessAWSCredentials';

function App() {
  // const [open, setOpen] = useState(false);

  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={() => setOpen(true)} >Open Popup</Button>
      <LoginPopup open={open} onClose={handleClose} /> */}
      <ProcessAWSCredentials />
    </div>
  );
};

export default App;
