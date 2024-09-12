import { User } from "@/db/dummy"
import {create} from "zustand"

type SelectedUserType = {
    selectedUser: User | null
    setSelectedUser: (user: User | null) => void
}

export const useSelectedUser = create<SelectedUserType>((set) => ({
    selectedUser: null,
    setSelectedUser: (user:User | null) => set({selectedUser : user})
})) 