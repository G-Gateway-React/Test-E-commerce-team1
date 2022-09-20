import { JoinStyle } from "../Cards/Style";

const Join: React.FC = () => {
  return (
    <>
      <JoinStyle>
        <text> SIGN UP FOR UPDATES</text>
        Sign up for exclusive early sale access and tailored new arrivals
        <span>
          <input type="text" placeholder="Your email address" color="#8c8c8c" />

          <button>JOIN</button>
        </span>
      </JoinStyle>
    </>
  );
};

export default Join;
