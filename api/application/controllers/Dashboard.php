<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/REST_Controller.php');

class Dashboard extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get() {
        
        $data['meta_title'] = $this->setting_model->get('meta_title');
        $data['meta_content'] = $this->setting_model->get('meta_content');
        $data['meta_keywords'] = $this->setting_model->get('meta_keywords');
        
        $data['about_me'] = $this->setting_model->get('about_me');
        $data['skills'] = $this->setting_model->get('skills');
        $data['name'] = $this->setting_model->get('name');
        $data['avatar'] = site_url('upload/thumbs/'.$this->setting_model->get('avatar'));
        
        $this->response($data);
    }
}