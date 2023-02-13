<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php include('form_validation.php'); ?>
    <link rel="stylesheet" href="form.css" />
    <title>Contact Player - falLUDOfield</title>
  </head>
  <body>
    <div class="container">
      <form id="contact" action="<?= $_SERVER['PHP_SELF']; ?>" method="post">
        <div id="top">
          <h3>Salman Ashraf</h3>
          <img src="user.png" alt="Player Image" id="userImg" />
          <h4>salman.ashraf@student.manchester.ac.uk</h4>
        </div>
        <fieldset>
          <input
            placeholder="Your name"
            name="name"
            type="text"
            tabindex="1"
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Email Address"
            name="email"
            type="text"
            tabindex="2"
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number"
            name="number"
            type="text"
            tabindex="3"
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Subject"
            type="text"
            name="subect"
            tabindex="4"
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your Message Here...."
            type='text'
            name="message"
            tabindex="5"
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  </body>
</html>

<!-----Copyright (c) 2023 by ssbalakumar (https://codepen.io/ssbalakumar/pen/bGwwaG)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

----->
