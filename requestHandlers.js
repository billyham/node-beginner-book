fs = require('fs');
formidable = require('formidable');

function start(response) {

  var body =
  '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" '+ 'content="text/html; charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" enctype="multipart/form-data" '+ 'method="post">'+
  '<input type="file" name="upload" multiple="multiple">'+ '<input type="submit" value="Upload file" />'+
  '</form>'+
  '</body>'+
  '</html>';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

function upload(response, request) {

  var form = new formidable.IncomingForm();
  form.parse(request, function(error, fields, files) {

    fs.rename(files.upload.path, './test.png', function(error) {
      if (error) {
        fs.unlink('./test.png');
        fs.rename(files.upload.path, './test.png');
      }
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('image received:<br/>');
    response.write('<img src=\'/show\' />');
    response.end();
  });
}

function show(response) {
  response.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('./test.png').pipe(response);
}

exports.start = start;
exports.show = show;
exports.upload = upload;
