<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/REST_Controller.php');

class Experience extends REST_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('experience_model');
    }

    public function index_get() {
        $this->response($this->experience_model->get_all());
    }
}
