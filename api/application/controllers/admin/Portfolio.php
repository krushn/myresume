<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/Admin_REST_Controller.php');

class Portfolio extends Admin_REST_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('portfolio_model');
    }

    public function index_get($page=1) {
        
        //pagination 
        $this->load->library('pagination');

        $limit = 10;
        $offset = ($page - 1) * $limit;

        $config['base_url'] = '#/portfolio/';
        $config['uri_segment'] = 4;
        $config['num_links'] = 5;
        $config['use_page_numbers'] = TRUE;
        $config['total_rows'] = $this->portfolio_model->count_all();
        $config['per_page'] = $limit;

        $this->pagination->initialize($config);

        $data['pagination'] = $this->pagination->create_links();
        
        $data['rows'] = array();
        
        $rows = $this->portfolio_model->get_list($offset, $limit);
        
        foreach($rows as $row){
            $row['image'] = site_url('upload/thumbs/'.$row['image']);
            $data['rows'][] = $row;
        }
        
        $this->response($data);
    }
    
    public function view_get($id) {
        
        $data = $this->portfolio_model->get($id);
        
        $data['thumb_url'] = site_url('upload/thumbs'); 
        $data['upload_url'] = site_url('admin/upload');
        
        $this->response($data);
    }
    
    public function update_post($id) {
        
        $this->portfolio_model->update($id, $this->post());
                
        $this->response(array('status' => 1));
    }
    
    public function insert_post() {
        
        $this->portfolio_model->add($this->post());
                
        $this->response(array('status' => 1));
    }
    
    public function delete_get($id) {
        
        //delete 
        $this->portfolio_model->delete($id);
        
        //send updated list 
        $this->response($this->portfolio_model->get_all());
    }
}
