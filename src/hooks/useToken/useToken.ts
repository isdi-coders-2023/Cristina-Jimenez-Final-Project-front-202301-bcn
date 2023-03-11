import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomJwtPayload } from "../types";

interface UseTokenStructure {
  getToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { username, sub }: CustomJwtPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ token, username, id: sub }));
    }
  }, [dispatch]);

  return { getToken };
};

export default useToken;