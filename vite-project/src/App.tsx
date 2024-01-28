import { useState } from "react";

import { Input } from "./components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowRightLeft } from "lucide-react";

export function App() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const numSistem = [
    {
      value: "decimal",
      label: "Decimal",
    },
    {
      value: "binário",
      label: "Binário",
    },
    {
      value: "octal",
      label: "Octal",
    },
    {
      value: "hexadecimal",
      label: "Hexadecimal",
    },
  ];

  return (
    <div className="p-6 max-w-7xl min-w-fit overflow-x-hidden space-y-4 mt-4 mx-auto border rounded">
      <h1 className="flex text-3xl font-bold">Conversor</h1>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex gap-2">
          <Popover open={open1} onOpenChange={setOpen1}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open1}
                className="w-[300px] justify-between"
              >
                {value1
                  ? numSistem.find((numSistem) => numSistem.value === value1)
                      ?.label
                  : "Selecione um sistema numérico"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder="Procure um sistema numérico..." />
                <CommandEmpty>Sistema numérico não encontrado.</CommandEmpty>
                <CommandGroup>
                  {numSistem.map((numSistem) => (
                    <CommandItem
                      key={numSistem.value}
                      value={numSistem.value}
                      onSelect={(currentValue) => {
                        setValue1(currentValue === value1 ? "" : currentValue);
                        setOpen1(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value1 === numSistem.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {numSistem.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <Input
            className="w-auto"
            placeholder={`Digite um número ${value1}`}
          />
        </div>
        <div className="flex m-3">
          <ArrowRightLeft />
        </div>
        <div className="flex gap-2">
          <Popover open={open2} onOpenChange={setOpen2}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open2}
                className="w-[300px] justify-between"
              >
                {value2
                  ? numSistem.find((numSistem) => numSistem.value === value2)
                      ?.label
                  : "Selecione um sistema numérico"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder="Procure um sistema numérico..." />
                <CommandEmpty>Sistema numérico não encontrado.</CommandEmpty>
                <CommandGroup>
                  {numSistem.map((numSistem) => (
                    <CommandItem
                      key={numSistem.value}
                      value={numSistem.value}
                      onSelect={(currentValue) => {
                        setValue2(currentValue === value2 ? "" : currentValue);
                        setOpen2(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value2 === numSistem.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {numSistem.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <Input
            className="w-auto"
            placeholder={`Digite um número ${value2}`}
          />
        </div>
        <div className="flex m-4">
          <Button>Converter</Button>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <Label>Resultado da conversão: </Label>
        <Input
          disabled
          className="w-auto"
          value={value1} // coloquei só pra testar
          placeholder="Valor convertido"
        />
      </div>
    </div>
  );
}
