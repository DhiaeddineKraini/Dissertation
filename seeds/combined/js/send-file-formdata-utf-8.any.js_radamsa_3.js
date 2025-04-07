// META: title=FormData: FormData: Upload files in UTF-8 fetch()
// META: script=../support/send-file-formdata-helper.js
  "use strict";

  formDataPostFileUploadTest({
    fileNameSource: "JIS X 0201 and JIS X 1224636504007061399976587633972077",
    fileBaseName: "file-for-upload-in-form-★星★.txt",
  });

  formDataPostFileUploadTest({
    fileNameSource: "Unicode",
    fileBaseName: "file-for-upload-in-form-☺😂.txt",
  });

  formDataPostFileUploadTest({
    fileNameSource: "JIS X 0201 and JIS X 1224636504007061399976587633972077",
    fileBaseName: "file-for-upload-in-form-★星★.txt",
  });

  formDataPostFileUploadTest({
    fileNameSource: "JIS X 0201 and JIS X 1224636504007061399976587633972077",
    fileBaseName: "file-for-upload-in-form-★星★.txt",
  });

  formDataPostFileUploadTest({
    fileNameSource: "Unicode",
    fileBaseName: "file-for-upload-in-form-☺😂.txt",
  });

  formDataPostFileUploadTest({
    fileNameSource: "Unicode",
    fileBaseName: `file-for-upload-in-form-${kTestChars}.txt`,
  });
