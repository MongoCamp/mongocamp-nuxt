import {useSessionStorage} from "@vueuse/core";
import {UserProfile} from "../api";

export const useMongocampStorage = () => {
  const profile:UserProfile = {user: '', isAdmin: false}
  const state = useSessionStorage('mongocamp', {token:'',  profile:profile})
  return state
}
