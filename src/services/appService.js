import JsPDF from 'jspdf'
import 'jspdf-autotable'

export default {
    name: 'appService',
    zeroPad (num, size) {
      var s = '000000000' + num
      return s.substr(s.length - size)
    },

    showBusyIndicator () {
    },

    exportPdf (pageOrientation, columnDef, tableData, exportFileName) {
      const doc = new JsPDF(pageOrientation)
      doc.autoTable({
        theme: 'grid',
        body: tableData,
        columns: columnDef
      })
      doc.save(exportFileName)
    }
}
