const html = `<div class="panel panel-default">
  <div class="panel-heading">Current balance:</div>
  <div class="panel-body"><%=accountInfo.total%></div>
</div>
<div class="panel panel-default">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Name</th>
        <th>Shares</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tboby>
      <% for (const transaction of accountInfo.transactions) { %>
      <tr>
        <td><a href="#/stock/<%=transaction['symbol']%>"><%=transaction["symbol"]%></a></td>
        <td><%=transaction["name"]%></td>
        <td><%=transaction["shares"]%></td>
        <td><%=transaction["price"]%></td>
        <td><%=transaction["total"]%></td>
      </tr>
      <% } %>
    </tboby>
  </table>
</div>`

const MainPage = {
    render: async (total, transactions) => {
        return await ejs.render(html, { accountInfo: {total, transactions}})
    },
    afterRender: async () => {

    }
}

export default MainPage