<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/Admin_REST_Controller.php');

class Experience extends Admin_REST_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('experience_model');
    }

    public function index_get($page=1) {
        
        //pagination 
        $this->load->library('pagination');

        $limit = 10;
        $offset = ($page - 1) * $limit;

        $config['base_url'] = '#/experience/';
        $config['uri_segment'] = 4;
        $config['num_links'] = 5;
        $config['use_page_numbers'] = TRUE;
        $config['total_rows'] = $this->experience_model->count_all();
        $config['per_page'] = $limit;

        $this->pagination->initialize($config);

        $data['pagination'] = $this->pagination->create_links();
        
        $data['rows'] = $this->experience_model->get_list($offset, $limit);
        
        $this->response($data);
    }
    
    public function view_get($id) {
        $this->response($this->experience_model->get($id));
    }
    
    public function update_post($id) {
        
        $this->experience_model->update($id, $this->post());
                
        $this->response(array('status' => 1));
    }
    
    public function insert_post() {
        
        $this->experience_model->add($this->post());
                
        $this->response(array('status' => 1));
    }
    
    public function delete_get($id) {
        
        //delete 
        $this->experience_model->delete($id);
        
        //send updated list 
        $this->response($this->experience_model->get_all());
    }
}
