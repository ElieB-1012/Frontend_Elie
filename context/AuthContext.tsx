import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import baseURL from '../api/baseURL';

//every time we change UserInfo we need to change the newObj in the login controller
type UserInfo = {
  accessToken: string;
  refreshToken: string;
  email:string
  ImgUrl:string
};

type AuthContextType = {
  isLoading: boolean;
  userInfo: UserInfo;
  splashLoading: boolean;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoading: false,
  userInfo: { accessToken: '', refreshToken: '', email:'', ImgUrl:'' },
  splashLoading: false,
  register: (email: string, password: string) => {},
  login: (email: string, password: string) => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{children: any }> = ({children}) =>{
  const [userInfo, setUserInfo] = useState<UserInfo>({ accessToken: '', refreshToken: '', email:'', ImgUrl:'' });
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (email: string, password: string) => {
    console.log(email+"111111")
    setIsLoading(true);

    axios
      .post(`${baseURL}/auth/register`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data as UserInfo;
        console.log('status', res.status);

        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        console.log('axios done register')

      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email: string, password: string) => {
    setIsLoading(true);

    axios
      .post(`${baseURL}/auth/login`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data as UserInfo;
        console.log(userInfo);
        console.log('status', res.status);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log('axios done login')

      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    console.log('at logout func ', userInfo);

    axios
      .get(`${baseURL}/auth/logout`, {
        headers: { Authorization: `JWT ${userInfo.refreshToken}` },
      })
      .then(res => {
        console.log(res.data);
        console.log('status', res.status);

        AsyncStorage.removeItem('userInfo');
        setUserInfo({ accessToken: '', refreshToken: '', email:'', ImgUrl:'' });
        setIsLoading(false);
        console.log('axios done logout')
      })
      .catch(async e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
        //delete all axios memory
        console.log(`axios clear memory + set userInfo to { accessToken: '', refreshToken: '', email:'' }`);
        await AsyncStorage.clear();
        setUserInfo({ accessToken: '', refreshToken: '', email:'', ImgUrl:'' });
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo: any = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
      }}
      >
      {children}
    </AuthContext.Provider>
  );
};