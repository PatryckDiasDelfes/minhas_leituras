'use state'

import { useState } from "react"
import { Iobras } from "@/app/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface sheetsState {

  obras: Iobras 
  AddButtonSheets: () => void

}

export function SheetDemo({obras, AddButtonSheets} : sheetsState) {

  const [infoObras, setInfoObras] = useState(obras)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adcione sua leitura</SheetTitle>
          <SheetDescription>
            Adcione sua leitura na lista de obras nas quais esta lendo.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Obra
            </Label>
            <Input onChange={(e) => setInfoObras({...infoObras, titulo: e.target.value})} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Autor/Link
            </Label>
            <Input className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={() => {AddButtonSheets}} type="submit">Salve a leitura</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
