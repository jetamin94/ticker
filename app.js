$(document).ready(function () {
  // View all members infomations
  $("#target").click(function () {
    $.ajax({
      type: 'GET',
      url: 'https://www.bitstamp.net/api/ticker/',
      success: function (results) {
        console.log(results);
        console.log(111);
        // $('.table.memberList').append('<tr> <td><a href="/user/' + arr[i]._id + '"> ' + arr[i].lastName + ' ' + arr[i].firstName + ' </a></td> <td><span class="label ' + statusColor + '">' + getStatus(arr[i].memberStatus) + '</span></td> <td>' + arr[i].email + '</td> <td>' + moment(arr[i].dob).format('DD-MM-YYYY') + '</td> <td><a class="btn btn-sm btn-blue mb5 ' + arr[i]._id + '" value=""><span class="icon-drawer"></span> Active</a> <a class="btn btn-sm btn-yellow mb5 ' + arr[i]._id + '"><span class="icon-ban"></span> BAN</a> <a class="btn btn-sm btn-red mb5 ' + arr[i]._id + '"><span class="icon-trash"></span> Delete</a> <a class="btn btn-sm btn-green mb5 ' + arr[i]._id + '"><span class="icon-trophy"></span>Add admin</a></td> </tr>');
      }
    })
  });
})