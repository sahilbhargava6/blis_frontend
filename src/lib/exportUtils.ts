/**
 * Converts an array of objects to a CSV string and triggers a browser download.
 * @param data Array of objects to export
 * @param headers Mapping of object key to CSV column header (e.g. { id: 'ID', created_at: 'Date' })
 * @param filename File name for the download
 */
export function exportToCSV(data: any[], headers: { [key: string]: string }, filename: string) {
  if (!data || !data.length) return;

  const csvRows: string[] = [];

  // Get headers
  const headerKeys = Object.keys(headers);
  const headerLabels = headerKeys.map(key => `"${headers[key].replace(/"/g, '""')}"`);
  csvRows.push(headerLabels.join(','));

  // Get data rows
  for (const row of data) {
    const values = headerKeys.map(key => {
      // Handle nested properties (e.g., 'user.name')
      let val = key.split('.').reduce((acc, part) => acc && acc[part], row);
      if (val === null || val === undefined) {
        val = '';
      } else {
        val = String(val).replace(/"/g, '""');
      }
      return `"${val}"`;
    });
    csvRows.push(values.join(','));
  }

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
