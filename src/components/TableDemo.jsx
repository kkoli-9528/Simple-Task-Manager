import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const TableDemo = ({ filterList }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead className="text-center">Title</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(filterList).map((eachTask) => (
          <TableRow key={eachTask.id}>
            <TableCell>{eachTask.id}</TableCell>
            <TableCell className="text-center">{eachTask.title}</TableCell>
            <TableCell className="text-right">{eachTask.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};
