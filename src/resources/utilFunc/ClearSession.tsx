import { useHistory } from "react-router-dom";

export const ClearSession = () => {
  const history = useHistory();
  localStorage.clear();
  history.push("/");
};
