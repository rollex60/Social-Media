'use client'

import { $fetch } from "@/$api/api.fetch"
import Field from "@/components/ui/field/Field"
import { Loader } from "@/components/ui/loader/Loader"
import { IChat } from "@/types/chat.types"
import { useQuery } from '@tanstack/react-query'
import { Search } from "lucide-react"
import { ChatListItem } from "./ChatListItem"
import { useAuth } from "@/hooks/useAuth"
import { useState } from "react"
import { useDebounce } from "@/hooks/useDebounce"

export function ChatsList() {
  const { user, isLoggedIn } = useAuth()

  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm)

  const {data, isLoading, isFetching} = useQuery({
    queryKey: ['chats', searchTerm],
    queryFn: () => 
    $fetch.get<{ data: IChat[] }>(
      `/chats?sort=createdAt:desc&populate[messages]=*&populate
[participants][populate][avatar]=*&filters[participants][email][$eq]=${user?.email}
&filters[$or][0][participants][username][$contains]=${debouncedSearchTerm}&filters[$or][1][messages][text]
[$contains]=${debouncedSearchTerm}`, 
      true
      ),
      enabled: isLoggedIn,
  })
  console.log(data)

 return <div>
  <div className="border-t border-b border-border p-layout">
    <Field placeholder="Search chats" 
    Icon={Search} 
    value={searchTerm} 
    onChange={e => setSearchTerm(e.target.value)}/>
  </div>
    <div>
      {isLoading || isFetching
      ?
        <div className="p-layout"> 
          <Loader />
        </div>
      : data?.data.map(chat => {
        return <ChatListItem key={chat.id} chat={chat} />
        })
      }
    </div>
  </div>
}
