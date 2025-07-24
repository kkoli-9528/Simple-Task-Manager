import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ComboboxDropdownMenu } from "./ComboboxDropdownMenu";
import { updateTaskStatus } from "./utils/taskUtils";

export const TableDemo = ({ filterList, setTask }) => {

  const handleStatus = (value, id) => {
    setTask(prevState => updateTaskStatus(prevState, id, value));
  };

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className={"w-full"}>
          <TableRow>
            <TableHead className="text-center">ID</TableHead>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterList && Object.values(filterList).map((eachTask) => (
            <TableRow key={eachTask.id}>
              <TableCell className="text-center">{eachTask.id}</TableCell>
              <TableCell className="text-center truncate">{eachTask.title}</TableCell>
              <TableCell className="text-center">{eachTask.status}</TableCell>
              <TableCell className="text-center">
                <ComboboxDropdownMenu handleStatus={handleStatus} id={eachTask.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};
