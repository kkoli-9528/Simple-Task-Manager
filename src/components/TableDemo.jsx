import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ComboboxDropdownMenu } from "./ComboboxDropdownMenu";
import { useEffect, useState } from "react";

export const TableDemo = ({ filterList }) => {
  const [flitered, setFlitered] = useState(filterList);

  const handleStatus = (value, id) => {
    setFlitered(prevState => {
      console.log(prevState);
      return prevState.map(item =>
        item.id === id ? { ...item, status: value } : item
      );
    });
  };

  useEffect(() => {
    setFlitered(filterList);
  }, [filterList]);

  return (
    <Table>
      <TableHeader className={"w-full"}>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead className="text-center">Title</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {flitered && Object.values(flitered).map((eachTask) => (
          <TableRow key={eachTask.id}>
            <TableCell>{eachTask.id}</TableCell>
            <TableCell className="text-center">{eachTask.title}</TableCell>
            <TableCell className="text-center">{eachTask.status}</TableCell>
            <TableCell className="text-center">
              <ComboboxDropdownMenu handleStatus={handleStatus} id={eachTask.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};
