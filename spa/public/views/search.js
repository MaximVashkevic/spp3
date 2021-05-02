const html = `<% for(let stockInfo of results) { %>
<a class="actionLink" href="<%- "#" + stockInfo.url -%>">
  <div class="panel panel-default search-result">
    <div class="row">
      <div class="col-xs-10 text-left">
        <h1 class="display-3"><%= stockInfo.symbol %></h1>
        <p class="text-secondary"><%= stockInfo.name %></p>
      </div>
      <div class="col-xs-2 text-right">
        <h1 class="display-3"><%= stockInfo.price %></h1>
      </div>
    </div>
  </div>
</a>
<% } %> `
const Search = {
    render: async (results) => {
        return await ejs.render(html, results)
    }
}

export default Search