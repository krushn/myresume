<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/REST_Controller.php');

class User extends REST_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('user_model');
    }
    
    public function index_get(){
        
        $data['name'] = $this->setting_model->get('name');
        $data['designation'] = $this->setting_model->get('designation');
        $data['avatar'] = site_url('upload/thumbs/'.$this->setting_model->get('avatar'));
        
        $this->response($data);
    }
    
    public function recover_pwd_get(){
        
        $ret = $this->user_model->recover_pwd(); //set //is_admin_login           
        
        $this->response($ret);
    }
    
    public function login_post(){
        
        $ret = $this->user_model->login($this->post()); //set //is_admin_login           
        
        $this->response($ret);
    }
    
    public function logout_get(){
        
        $this->session->sess_destroy();
        
        $this->response(array('status' => 1));
    }
}