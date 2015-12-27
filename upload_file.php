<?php
if ($_FILES["myfile"]["error"] > 0)   //"myfile" 的值是input type=file name 的值。
  {
  echo "Error: " . $_FILES["myfile"]["error"] . "<br />";
  }
else
  {
  echo "Upload: " . $_FILES["myfile"]["name"] . "<br />";
  echo "Type: " . $_FILES["myfile"]["type"] . "<br />";
  echo "Size: " . ($_FILES["myfile"]["size"] / 1024) . " Kb<br />";
  echo "Stored in: " . $_FILES["myfile"]["tmp_name"] . "<br />";
  //echo "number:".$_POST["number"]."<br />";
  if (file_exists("upload/" . $_FILES["myfile"]["name"]))
   {
  	echo $_FILES["myfile"]["name"] . " already exists. ";
   }
   else
   {
   	move_uploaded_file($_FILES["myfile"]["tmp_name"], "upload/" .$_FILES["myfile"]["name"]);
   	echo "Stored in: " . "upload/" . $_FILES["myfile"]["name"];
   }



   $myfile =fopen("upload/".$_FILES["myfile"]["name"], "r") or die("Unable to open file!");
   //echo fgets($myfile);
   

   $myoutputfile =fopen("outputfile.txt", "w") or die("Unable to open file!");
   //fwrite($myoutputfile, "111\n");
   
   /*

   for ($i=0; $i <$_POST["number"] ; $i++) { 
   	# code...
   	$file=fgets($myfile);
   	//$file=fgets($myfile);
   	//$file=str_replace(PHP_EOL, "", $file);
   	//echo $_POST["commandfirst"];
   	//echo $file;
   	//echo $_POST["commandend"];
   	//$txt=str_replace(PHP_EOL,"",$_POST["commandfirst"]).str_replace(PHP_EOL, "", $file).str_replace(PHP_EOL,"",$_POST["commandend"])."\r\n";
   	$txt=str_replace("\r\n","",$_POST["commandfirst"]).str_replace("\r\n", "", $file).str_replace("\r\n","",$_POST["commandend"])."\r\n";
   	//$txt = "Bill Gates\r\n";
   	fputs($myoutputfile,$txt);
   	//phpinfo();
   }

    */

   for($i=0;;$i++){

    $file=fgets($myfile);
    
    if(str_replace("\r\n", "", $file)!=""){
        $txt=str_replace("\r\n","",$_POST["commandfirst"]).str_replace("\r\n", "", $file).str_replace("\r\n","",$_POST["commandend"])."\r\n";
        fputs($myoutputfile,$txt);
      }

    if(feof($myfile))
        break;
   }




   fclose($myfile);
   fclose($myoutputfile);
   unlink("upload/".$_FILES["myfile"]["name"]);
  }

  //print_r(get_defined_constants());//
  //echo $_POST["number"];
?>