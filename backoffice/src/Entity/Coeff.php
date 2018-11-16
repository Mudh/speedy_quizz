<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CoeffRepository")
 */
class Coeff
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $coeff;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Step", inversedBy="coeffs")
     * @JMS\Exclude();
     */
    private $step;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Level", inversedBy="coeffs")
     * @JMS\Exclude();
     */
    private $level;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $alias;
    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCoeff(): ?float
    {
        return $this->coeff;
    }

    public function setCoeff(float $coeff): self
    {
        $this->coeff = $coeff;

        return $this;
    }

    public function getStep(): ?Step
    {
        return $this->step;
    }

    public function setStep(?Step $step): self
    {
        $this->step = $step;

        return $this;
    }

    public function getLevel(): ?Level
    {
        return $this->level;
    }

    public function setLevel(?Level $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getAlias()
    {
        return $this->alias;
    }

    /**
     * Set the value of alias
     *
     * @return  self
     */ 
    public function setAlias($alias)
    {
        $this->alias = $alias;

        return $this;
    }
}
